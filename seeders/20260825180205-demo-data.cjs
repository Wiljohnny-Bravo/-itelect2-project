"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert("Users", [
      {
        name: "John Doe",
        email: "john@outlook.com",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Jane Doe",
        email: "jane@gmail.com",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Butter Renei",
        email: "butter@yahoo.com",
        createdAt: now,
        updatedAt: now,
      },
    ]);

    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users";',
      { type: Sequelize.QueryTypes.SELECT },
    );

    console.log("USERS FROM DATABASE:", users);

    const idOf = (name) => {
      const user = users.find((user) => user.name === name);

      if (!user) {
        throw new Error(`User not found: ${name}`);
      }

      return user.id;
    };

    await queryInterface.bulkInsert("Tasks", [
      {
        title: "Wake up",
        dueDate: new Date("2026-08-27"),
        completed: false,
        userId: idOf("John Doe"),
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Sleep",
        dueDate: new Date("2026-08-28"),
        completed: false,
        userId: idOf("John Doe"),
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Wake up",
        dueDate: new Date("2026-08-29"),
        completed: true,
        userId: idOf("Jane Doe"),
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Sleep",
        dueDate: new Date("2026-08-30"),
        completed: false,
        userId: idOf("Jane Doe"),
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Wake up",
        dueDate: new Date("2026-08-31"),
        completed: false,
        userId: idOf("Butter Renei"),
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tasks", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
