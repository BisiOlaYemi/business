import Layout from '@/components/Layout/layout'
import Image from 'next/image';
import React from 'react'


const page = () => {
    const places = [
        {
          name: "Mount Everest",
          image: "/everest.jpg",
          description:
            "Mount Everest is the highest mountain in the world and is a popular destination for mountaineers.",
        },
        {
          name: "The Great Barrier Reef",
          image: "/reef.jpg",
          description:
            "The Great Barrier Reef is the world's largest coral reef system and is a must-see destination for divers and snorkelers.",
        },
        {
          name: "Machu Picchu",
          image: "/machu-picchu.jpg",
          description:
            "Machu Picchu is an ancient Incan citadel located in the Andes Mountains of Peru and is a popular tourist attraction.",
        },
      ];
  return (
    <Layout>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-48">
      {places.map((place) => (
        <div
          key={place.name}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <div className="relative h-48">
            <Image
              src={place.image}
              alt={place.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{place.name}</h2>
            <p className="text-gray-600">{place.description}</p>
          </div>
        </div>
      ))}
    </div>
    </Layout>
  )
}

export default page