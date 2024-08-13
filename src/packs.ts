//array of objects typescript
interface Pack2022 {
	packYear?: number;
	packName?: string;
	packImage?: string;
	packFrame: string;
}

export const packs: Pack2022[] = [
  {
    packYear: 2022,
    packName: "Instalar Actualizador de Licencias en Renta",
    packImage:
      "https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd1bf373470d5202be15d4_get_app_black_24dp%201.png",
    packFrame:
      "https://microsip.b-cdn.net/DescargasSoporte/Sentinel/actualizadorlicencias-bunny.html",
  },
  {
    packYear: 2022,
    packName: "Instalar Licencias Candado",
    packImage:
      "https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd1bf373470d5202be15d4_get_app_black_24dp%201.png",
    packFrame:
      "https://microsip.b-cdn.net/DescargasSoporte/Sentinel/licenciascandado-bunny.html",
  },
  {
    packFrame:
      "https://microsip.b-cdn.net/DescargasSoporte/Sentinel/rte-bunny.html",
  },
  {
    packFrame:
      "https://microsip.b-cdn.net/DescargasSoporte/Sentinel/rte-linux-bunny.html",
  },
  {
    packFrame:
      "https://microsip.b-cdn.net/DescargasSoporte/Sentinel/pda-linux-bunny.html",
  },
];
