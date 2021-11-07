export const Capitalize=(str)=>{
    str = str.replace('-', ' ');
    str = str.replace(/\b\w/g, l => l.toUpperCase())
    return str
    
}