import prisma from "../../../../../../../lib/prisma";

export const getDataUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      where: {
        role: "CUSTOMER",
      },
    });

    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};
