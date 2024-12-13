'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const CATEGORIES = [
  { id: 'clothing', label: 'Clothing' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'accessories', label: 'Accessories' },
];

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <Slider
          defaultValue={[0, 500]}
          max={500}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mt-2"
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-3">
          {CATEGORIES.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCategories([...selectedCategories, category.id]);
                  } else {
                    setSelectedCategories(
                      selectedCategories.filter((id) => id !== category.id)
                    );
                  }
                }}
              />
              <Label htmlFor={category.id}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}