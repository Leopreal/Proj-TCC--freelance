// components/Benefits.js

import React from 'react';

const Benefits = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Benefícios</h2>
        <ul className="list-none">
          {[
            'Atendimento ao Cliente',
            'Profissionais qualificados',
            'Bem localizado',
            'Ambiente diferenciado',
            'Valorizamos o tempo e o dinheiro de nossos clientes',
            'Trabalhamos apenas com produtos premium hipoalergênicos de alta qualidade',
            'Todas as superfícies e ferramentas são limpas e desinfetadas antes e após o uso'
          ].map((item, index) => (
            <li key={index} className="text-lg text-gray-600 mb-3">
              <h3 className="font-medium">{item}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
