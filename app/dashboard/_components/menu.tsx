"use client";
import Button from "@/ui/button";
import { useState } from "react";
import ModuleWrapper from "./moduleWrapper";
import ModuleTitle from "./moduleTitle";

export default function MenuModule() {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [menuTitles, setMenuTitles] = useState<{ es: string; en: string }[]>([]);

  const addTitle = () => {
    setMenuTitles([...menuTitles, { es: "Nuevo", en: "New" }]);
    setEditIndex(menuTitles.length);
  };

  const toggleEditing = (index: number | null) => setEditIndex(editIndex === index ? null : index);

  const updateTitle = (index: number, field: "es" | "en", value: string) => {
    const updatedTitles = [...menuTitles];
    updatedTitles[index] = { ...updatedTitles[index], [field]: value };
    setMenuTitles(updatedTitles);
  };

  const field = "w-[200px] h-[40px] rounded-md border-[1px] border-slate-500/50 flex items-center px-4 mx-2";
  return (
    <ModuleWrapper>
      <div className="w-full flex items-center justify-between">
        <ModuleTitle title="Titulos en barra de navegacion" />
        <div className="flex gap-8">
          <Button text="Agregar titulo" onClick={addTitle} type="primary" />
          <Button text="Guardar" onClick={addTitle} type="primary" />
        </div>
      </div>
      <div className="w-full flex items-center justify-start flex-wrap mt-8">
        {menuTitles.map((t, index) => (
          <div key={index} className="flex items-center justify-center mx-8 my-4">
            {editIndex === index ? (
              <input
                value={menuTitles[index].es}
                onChange={(e) => updateTitle(index, "es", e.target.value)}
                className={field}
              />
            ) : (
              <li className={field}>{t.es}</li>
            )}
            {editIndex === index ? (
              <input value={t.en} onChange={(e) => updateTitle(index, "en", e.target.value)} className={field} />
            ) : (
              <li className={field}>{t.en}</li>
            )}
            <div className="flex items-center mx-2 gap-4">
              <Button
                text={editIndex === index ? "Guardar" : "Editar"}
                onClick={() => toggleEditing(editIndex === index ? null : index)}
                type="secondary"
              />
              <Button
                text="Eliminar"
                onClick={() => setMenuTitles(menuTitles.filter((_, i) => i !== index))}
                type="warning"
              />
            </div>
          </div>
        ))}
      </div>
    </ModuleWrapper>
  );
}
