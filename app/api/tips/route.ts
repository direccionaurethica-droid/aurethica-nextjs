import tips from '../data/tips.json';

export async function GET() {
  return Response.json(tips);
}
