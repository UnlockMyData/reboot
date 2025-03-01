"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import CookiesExplain from "@/components/CookiesExplain";
import Hero from "@/components/Hero";
import News from "@/components/News";

import QuelquesChiffres from "@/components/QuelquesChiffres";
import Transition1 from "@/components/Transition1";
import Link from "next/link";
// import News from "@/components/News";

export default function Home() {
  return (
    <>
        <div className="hero bg-base-200 p-12">
          <div className="hero-content text-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold">Des données en conscience</h1>
              <p className="py-6">
                Le web est un monde de données, entre les comptes crée en un rien de temps, les informations que nous partageons, les traces que nous laissons...
              </p>
              <p>Unlock My data vous permet de comparer des services similaires et de choisir celui qui vous correspond le mieux.</p>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-red-50 rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-red-800">Alerte CNIL 2024</h2>
                    <div className="text-4xl font-bold text-red-600">5 629</div>
                    <div className="text-xl text-red-800">violations de données personnelles</div>
                    <div className="text-lg font-semibold text-red-700">+20% par rapport à 2023</div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">La tendance la plus préoccupante est celle d'une recrudescence de violations de très grande ampleur. Le nombre de violations touchant plus d'un million de personnes a doublé en un an.</p>
                    <p className="text-sm text-gray-500 italic">Source : <a href="https://www.cnil.fr/fr/violations-massives-de-donnees-en-2024-quels-sont-les-principaux-enseignements-mesures-a-prendre" className="underline hover:text-red-600" target="_blank" rel="noopener noreferrer">CNIL - Janvier 2025</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Pourquoi comparer les services ?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-3">Transparence</h3>
                  <p className="text-gray-600">Comprenez comment vos données sont réellement utilisées par chaque service</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl mb-4">⚖️</div>
                  <h3 className="text-xl font-semibold mb-3">Choix éclairé</h3>
                  <p className="text-gray-600">Comparez les pratiques de confidentialité et choisissez le service qui respecte le mieux vos données</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl mb-4">🛡️</div>
                  <h3 className="text-xl font-semibold mb-3">Protection</h3>
                  <p className="text-gray-600">Protégez votre vie privée en évitant les services qui ne respectent pas vos données</p>
                </div>
              </div>
              <div className="mt-12">
                <a href="/comparatif_appli" className="btn btn-primary btn-lg">Découvrir nos comparatifs</a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <span className="text-2xl">❤️</span>
                <h2 className="text-3xl font-bold">Made with love</h2>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex justify-center mb-8">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">Les e-novateurs</h3>
                      <p className="text-gray-600 italic">Média associatif français</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Notre mission est de sensibiliser le grand public à l'impact du numérique sur l'environnement et la société. 
                    À travers nos contenus et nos outils, nous souhaitons promouvoir un usage plus conscient et responsable des technologies.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <div className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                      <span className="text-primary-600"><Link href="https://les-enovateurs.com/category/sobriete/1" className="hover:text-primary-800 transition-colors duration-300 flex items-center gap-2">🌱 <span className="hover:underline">Sobre</span></Link></span>
                    </div>
                    <div className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                      <span className="text-primary-600"><Link href="https://les-enovateurs.com/category/ethique/1" className="hover:text-primary-800 transition-colors duration-300 flex items-center gap-2">🤝 <span className="hover:underline">Ethique</span></Link></span>
                    </div>
                    <div className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                      <span className="text-primary-600"><Link href="https://les-enovateurs.com/category/inclusion/1" className="hover:text-primary-800 transition-colors duration-300 flex items-center gap-2">💡 <span className="hover:underline">Inclusive</span></Link></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Accroche/> */}
        {/* <Stats /> */}
        {/*   <Concept/>*/}
        {/* <Features/> */}
        {/* <Score/>  */}
        {/* <FAQ/>  */}
  
      {/* // </div> */}
    </>
  );
}
