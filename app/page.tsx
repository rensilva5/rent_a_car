import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components';
import Image from 'next/image';
import { fetchCars } from '@/utils';
import { useSearchParams } from 'next/navigation';
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types';

export default async function Home({ searchParams }: HomeProps) {
  // Fetch data
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });

  // Check if data is empty
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="bg-gray-100 min-h-screen p-4">
      {/* Hero Section */}
      <Hero />

      <div className="max-w-4xl mx-auto mt-8 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary-blue">View All Vehicles</h1>
          <p className="text-lg text-gray-600">Discover your dream car</p>
        </div>

        {/* Filters Section */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center bg-hero-bg bg-absolute">

          <SearchBar />
          <div className="mt-4 sm:ml-4">
            <CustomFilter title="Fuel" options={fuels} />
            <CustomFilter title="Year" options={yearsOfProduction} />
          </div>
        </div>

        {/* Car Cards Section */}
        {!isDataEmpty ? (
          <section className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allCars?.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold text-red-600">Oops, no results! Please try again</h2>
            <p className="text-gray-700">{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
