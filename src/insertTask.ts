import prisma from "./db/prisma";

async function main() {
  const newTask = await prisma.tasks.create({
    data: {
      title: 'Sample Task',
      color: 'blue',
      completed: false,
    },
  });

  console.log('Inserted Task:', newTask);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
