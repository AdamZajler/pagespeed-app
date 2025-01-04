import { prisma } from "@prisma";

interface Props {
  userId: string;
}

type State = {
  apiKey: string;
  id: number;
  userId: string;
} | null;

export const getUserSettings = async ({ userId }: Props): Promise<State> => {
  return await prisma.config.findUnique({
    where: {
      userId,
    },
  });
};
