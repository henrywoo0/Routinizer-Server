import { getRepository } from "typeorm";
import Participation from "../../../../entity/Participation.entity";

export default async () => {
  try {
    const participationRepository = getRepository(Participation);
    const participations = await participationRepository.find({});
    for (const participation of participations) {
      // check whether someone upload the image or not
    }
  } catch (error) {
    console.log(error);
  }
};
