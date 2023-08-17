function domainName(url){
  //your code here
  url = url.replace("http://", "")
  url = url.replace("https://", "")
  url = url.replace("www.", "")
  
  return url.split(".")[0]
}

console.log(domainName("http://github.com/carbonfive/raygu"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))