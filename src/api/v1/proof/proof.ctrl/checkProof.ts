import { getRepository } from "typeorm";
import Participation from "../../../../entity/Participation";

export default async () => {
  try {
    const participationRepository = getRepository(Participation);
    const participations = await participationRepository.find({});
    for (const participation of participations) {
    }
  } catch (error) {
    console.log(error);
  }
};
