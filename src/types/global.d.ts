// Allow side-effect CSS imports in TypeScript strict mode
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
