import type { FC } from "react";
import { useState } from "react";
import { LogoBrand } from "../molecules";
import type { ColorScheme } from "../molecules";
import { Logo } from "../atoms";

/**
 * LogoBrand Showcase - Demostración de variantes de colores
 *
 * Muestra todas las variantes de colores disponibles para LogoBrand
 */

const LogoBrandShowcase: FC = () => {
  const [preset, setPreset] = useState<"brandDark" | "brandLight">("brandDark");

  const colorSchemes: ColorScheme[] = [
    "default",
    "brandDark",
    "brandLight",
    "dark",
    "light",
    "warning",
    "error",
    "success",
  ];

  return (
    <div className="p-8 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        LogoBrand - Variantes de Color
      </h2>

      {/* Vista rápida con toggle brandDark/brandLight */}
      <div className="mb-8 p-6 rounded-lg border bg-white shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            Vista previa (toggle preset)
          </h3>
          <div className="flex items-center gap-2">
            <button
              className={`px-3 py-1.5 rounded border text-sm ${
                preset === "brandDark"
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() => setPreset("brandDark")}
            >
              brandDark
            </button>
            <button
              className={`px-3 py-1.5 rounded border text-sm ${
                preset === "brandLight"
                  ? "bg-amber-100 text-amber-900 border-amber-300"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() => setPreset("brandLight")}
            >
              brandLight
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <LogoBrand
              colorScheme={preset as ColorScheme}
              navigable={false}
              logoProps={{ size: { x: 120, y: 112 } }}
            />
            <span className="text-xs text-gray-500">LogoBrand ({preset})</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logo colorPreset={preset} size={{ x: 120, y: 112 }} />
            <span className="text-xs text-gray-500">Logo átomo ({preset})</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {colorSchemes.map((scheme) => (
          <div
            key={scheme}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
          >
            <h3 className="text-sm font-semibold mb-3 capitalize text-gray-700">
              {scheme}
            </h3>
            <div className="mb-3">
              <LogoBrand
                colorScheme={scheme}
                navigable={false}
                logoProps={{
                  size: { x: 80, y: 75 },
                }}
              />
            </div>
            <div className="text-xs text-gray-500 text-center">
              <code>colorScheme="{scheme}"</code>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Uso:</h3>
        <pre className="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
          {`// Variante light
<LogoBrand colorScheme="light" />

  // Variante warning  
  <LogoBrand colorScheme="warning" />

  // Con props personalizadas
  <LogoBrand 
    colorScheme="error"
    logoProps={{ 
      size: { x: 100, y: 94 } 
    }}
  />`}
        </pre>
      </div>
    </div>
  );
};

export default LogoBrandShowcase;
