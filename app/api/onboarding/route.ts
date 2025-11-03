import onboarding from '../data/onboarding.json';

export async function GET() {
  return Response.json(onboarding);
}
