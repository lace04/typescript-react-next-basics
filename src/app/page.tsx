import React from 'react';

let title: string = 'Hola mundo';

let user = {
  name: 'Juan',
  age: 25,
}

function sumar(a: number, b: number): number {
  return a + b;
}

function Button() {

  

  console.log(sumar(1, 2));
  return <button>{title}</button>;
}

function page() {
  return (
    <>
      <div>Bienvenido a el curso!</div>
      <Button />
    </>
  );
}

export default page;
