import servicesData from "@/public/data/services.json";
import Manual from "@/components/company/manual";
import Oldway from "@/components/company/oldway";
import fs from 'fs/promises';
import path from 'path';

type Props = {
  params: {
    slug: string;
  };
};

// Types for permissions data
type Permission = {
    permission_id: number;
    permission_title?: string;
    permission_description?: string;
    category_id?: number;
    category_icon?: string;
    category_title?: string;
    category_risk_level?: number;
};

type CompanyApp = {
    app_title: string;
    app_icon: string;
    app_last_update: string;
    list_permissions: Permission[];
};

type CompanyPermissionsData = {
    stakeholder_total_permissions_count: number;
    stakeholder_high_risk_permissions_count: number;
    stakeholder_name: string;
    apps: CompanyApp[];
};

// Function to check if permission data exists for a company
async function permissionDataExists(normalizedName: string): Promise<boolean> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'oldway', `${normalizedName}.json`);
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

// Function to load permission data statically
async function getPermissionData(normalizedName: string) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'oldway', `${normalizedName}.json`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    
    // Remove the outer quotes from the file content if they exist
    const jsonContent = fileContent.startsWith('"') && fileContent.endsWith('"') 
      ? JSON.parse(fileContent) // Parse the JSON string
      : fileContent;
            
    return JSON.parse(jsonContent);
  } catch (error) {
    console.warn(`No permissions data file found for ${normalizedName}`);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    // Generate parameters for each company
    return servicesData
      .map((entreprise) => ({
          slug: entreprise.slug
      }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    // In case of error, return at least one empty parameter
    return [{ slug: "default" }];
  }
}

// Generate static props for the page
export async function generateMetadata({ params }: Props) {
  // Await the params object before accessing its properties
  const paramsObj = await params;
  const slug = paramsObj.slug;
  const entreprise = servicesData.find(
    (service) => service.slug === slug
  );

  return {
    title: entreprise ? `${entreprise.name} - Détails Entreprise` : 'Détails Entreprise',
    description: entreprise
      ? `Informations détaillées sur ${entreprise.name} et ses pratiques de gestion des données`
      : 'Informations détaillées sur l\'entreprise et ses pratiques de gestion des données',
  };
}

export default async function EntreprisePage({ params }: Props) {
  // Await the params object before accessing its properties
  const paramsObj = await params;
  const slug = paramsObj.slug;
  // Find the enterprise data by name
  const entrepriseIndex = servicesData.findIndex(
    (service) => service.slug === slug
  );

  if (entrepriseIndex === -1) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-red-50 rounded-lg shadow-md">
          <h1 className="text-2xl text-red-600 mb-2">Entreprise non trouvée</h1>
          <p className="text-gray-700">
            L&apos;entreprise &quot;{slug}&quot; n&apos;existe pas dans
            notre base de données.
          </p>
        </div>
      </div>
    );
  }

  // Clone the enterprise to avoid modifying the original data
  const entreprise = JSON.parse(JSON.stringify(servicesData[entrepriseIndex]));

  // Statically check if the company is using the new or old way
  const isNew = entreprise.mode === 1; //1 for new way, 0 for old way

  // Pre-load permissions data if this is an oldway enterprise
  if (!isNew) {
    // Check if permission data exists
    const hasPermissionData = await permissionDataExists(slug);
    
    // If permission data exists, load it and attach to the enterprise object
    if (hasPermissionData) {
      try {
        const permissionsData = await getPermissionData(slug);
        
        if (permissionsData) {
          // Attach the permissions data to the enterprise object
          entreprise.permissions_data = permissionsData;
        }
      } catch (error) {
        console.error("Error loading permissions data:", error);
      }
    }
  }

  // Return the appropriate component, now passing the entire entreprise object
  return isNew ? <Manual slug={slug} /> : <Oldway slug={slug} entreprise={entreprise} />;
}
