type post = {
  autor: string;
  texto: string;
};

const arr: post[] = [
  {
    autor: "JAS",
    texto: "Oa sd zxc r",
  },
  {
    autor: "FAS",
    texto: "OASDASV FDDZr",
  },
  {
    autor: "DAS",
    texto: "sdfsfAFDFF",
  },
  {
    autor: "TAS",
    texto: "ASDASDASFFGGc r",
  },
  {
    autor: "DAS",
    texto: "ORYJTYJFG r",
  },
];

function postsDoAutor(arrPosts: post[], autor: string): post[] {
  const arrAutor: post[] = arrPosts.filter((post) => {
    return post.autor === autor;
  });

  return arrAutor;
}

console.log(postsDoAutor(arr, "DAS"));
