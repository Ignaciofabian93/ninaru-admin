"use client";
import Button from "@/ui/button";
import ModuleTitle from "./moduleTitle";
import ModuleWrapper from "./moduleWrapper";
import { useState } from "react";

type Item = {
  title: string;
  price: string;
  description: string;
  image: string;
};

type Section = {
  name: string;
  items: Item[];
};

export default function LetterModule() {
  const [sections, setSections] = useState<Section[]>([]);

  const addSection = () => setSections([...sections, { name: "Nueva seccion", items: [] }]);

  const updateSectionName = (index: number, name: string) => {
    const updatedSections = [...sections];
    updatedSections[index].name = name;
    setSections(updatedSections);
  };

  const addItem = (sectionIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].items.push({
      title: "",
      price: "",
      description: "",
      image: "",
    });
    setSections(updatedSections);
  };

  const updateItem = (sectionIndex: number, itemIndex: number, field: keyof Item, value: string) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].items[itemIndex][field] = value;
    setSections(updatedSections);
  };

  const removeSection = (index: number) => setSections(sections.filter((_, i) => i !== index));

  const removeItem = (sectionIndex: number, itemIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].items = updatedSections[sectionIndex].items.filter((_, i) => i !== itemIndex);
    setSections(updatedSections);
  };

  return (
    <ModuleWrapper>
      <div className="w-full flex items-center justify-between">
        <ModuleTitle title="Carta" />
        <Button text="Agregar Sección" onClick={addSection} type="primary" />
      </div>

      <div className="mt-8">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8 border-b pb-4">
            <input
              className="w-full mb-4 p-2 border rounded"
              value={section.name}
              onChange={(e) => updateSectionName(sectionIndex, e.target.value)}
              placeholder="Nombre de la Sección"
            />
            <Button text="Agregar Item" onClick={() => addItem(sectionIndex)} type="secondary" />

            <div className="mt-4 flex gap-4 overflow-x-auto p-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex-shrink-0 w-[800px] p-4 border rounded mb-4">
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    placeholder="Título"
                    value={item.title}
                    onChange={(e) => updateItem(sectionIndex, itemIndex, "title", e.target.value)}
                  />
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    placeholder="Precio"
                    value={item.price}
                    onChange={(e) => updateItem(sectionIndex, itemIndex, "price", e.target.value)}
                  />
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    placeholder="Descripción"
                    value={item.description}
                    onChange={(e) => updateItem(sectionIndex, itemIndex, "description", e.target.value)}
                  />
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    placeholder="URL de la Imagen"
                    value={item.image}
                    onChange={(e) => updateItem(sectionIndex, itemIndex, "image", e.target.value)}
                  />

                  <div className="flex justify-between">
                    <Button text="Eliminar Item" onClick={() => removeItem(sectionIndex, itemIndex)} type="warning" />
                  </div>
                </div>
              ))}
            </div>

            <Button text="Eliminar Sección" onClick={() => removeSection(sectionIndex)} type="warning" />
          </div>
        ))}
      </div>
    </ModuleWrapper>
  );
}
