/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('score_date').del()
  await knex('users').del()
  await knex('users').insert([
    {id: 1, email: 'tak@gmail.com', first_name: "Omar", last_name: "Ahmed"},
    {id: 2, email: 'baabba@gmail.com', first_name: "Omnia", last_name: "Mouhmuod"},
    {id: 3, email: 'yuuuu@gmail.com', first_name: "Dina", last_name: "Yousef"},
  ]);
};
