import React from 'react'

const page = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Name Header</h1>
          <div className="mt-8 flex justify-center gap-4">
            {['Card 1', 'Card 2', 'Card 3'].map((cardName) => (
              <div key={cardName} className="w-64 rounded-lg border p-4 shadow-lg">
                <h2 className="text-2xl font-semibold">{cardName}</h2>
              </div>
            ))}
          </div>
        </div>
      );
}

export default page