import React from "react";
import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { fetchCars } from "@/utils";
export default async function Home() {
  const allcars = await fetchCars();
  const isDataEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;

  console.log(allcars);

  return (
    <div>
      <main className="overflow-hidden">
        <Hero />

        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>

          <div className="home__filters">
            <SearchBar />
          </div>

          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allcars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{allcars?.message}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
