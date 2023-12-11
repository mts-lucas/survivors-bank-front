export { default } from "next-auth/middleware"


// adicionar as urs que forem privadas, tirar dashboard e por a primeira, as proximas é so adicioanr no array
// caso queira privar uma sessoao inteira seguir como esta em:
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/create/:path*"]}