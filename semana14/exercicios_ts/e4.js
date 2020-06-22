var arr = [
    {
        autor: "JAS",
        texto: "Oa sd zxc r"
    },
    {
        autor: "FAS",
        texto: "OASDASV FDDZr"
    },
    {
        autor: "DAS",
        texto: "sdfsfAFDFF"
    },
    {
        autor: "TAS",
        texto: "ASDASDASFFGGc r"
    },
    {
        autor: "DAS",
        texto: "ORYJTYJFG r"
    },
];
function postsDoAutor(arrPosts, autor) {
    var arrAutor = arrPosts.filter(function (post) {
        return post.autor === autor;
    });
    return arrAutor;
}
console.log(postsDoAutor(arr, "DAS"));
