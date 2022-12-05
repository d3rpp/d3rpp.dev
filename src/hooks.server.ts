import { redirect, type Handle } from '@sveltejs/kit';
 
export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.host.includes("d3rpp-dev.pages.dev")) {
		throw redirect(302, `https://d3rpp.dev${event.url.pathname}`)
  }
 
  return await resolve(event);
}