export enum Diffculty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestion = async (
  amount: number,
  diffculty: Diffculty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${diffculty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
};
