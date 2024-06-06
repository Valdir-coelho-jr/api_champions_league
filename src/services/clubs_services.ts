import * as HttpResponse from "../utils/http_helper";
import * as ClubRepository from "../repositories/clubs_repository";

export const getClubService = async () => {
  const data = await ClubRepository.findAllClubs();

  const response = await HttpResponse.ok(data);

  return response;
};
