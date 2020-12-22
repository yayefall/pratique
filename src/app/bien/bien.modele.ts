export  interface  Bien {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  state: number;
  categorie: string;
  sale: boolean;
  // @ts-ignore
  creatAt: date;
}
