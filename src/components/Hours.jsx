
import React from 'react';

const Hours = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Horários de Trabalho</h2>
        <ul className="list-none">
          {['Domingo - Das 10H00 às 16H00', 
            'Segunda - Das 09H00 às 19H00',
            'Terça - Das 08H00 às 20H00',
            'Quarta - Das 08H00 às 20H00',
            'Quinta - Das 08H00 às 20H00',
            'Sexta - Das 08H00 às 19H00',
            'Sábado - Das 09H00 às 17H00'].map((item, index) => (
            <li key={index} className="text-lg text-gray-600 mb-2">
              <h2 className="font-medium">{item}</h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hours;
