'use strict';

// Test assumes installation and access to @starbase/starbase
const Starbase = require('@starbase/starbase');
const starbase = Starbase();
const database = starbase.Database('test123');


const Triples = require('./triples');
const triples = Triples(database);

async function Test() {
  await triples.put('mike','likes','javascript').then(console.log);
  await triples.get('mike','likes','javascript').then(console.log);
  await triples.list('mike').then(console.log);
  await triples.del('mike','likes','javascript').then(console.log);
  await triples.list();
  database.deleteDB().then(console.log);
  return "DONE!";
}

Test().then(console.log);
