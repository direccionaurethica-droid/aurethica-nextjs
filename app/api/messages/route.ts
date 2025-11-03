import messages from '../data/messages.json';

export async function GET() {
  return Response.json(messages);
}
