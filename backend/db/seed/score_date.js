/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('score_date').del()
  await knex('score_date').insert([
    {id: 1, score: 40, date: "9/11/2022", user_id: 1},
    {id: 2, score: 20, date: "9/10/2022", user_id: 2},
    {id: 3, score: 50, date: "9/7/2022", user_id: 3}
  ]);
};
