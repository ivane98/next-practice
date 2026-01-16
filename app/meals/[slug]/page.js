export default async function MealPage({ params }) {
  const { slug } = await params;

  return <h1>Meal</h1>;
}
