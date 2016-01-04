// I looked around and it seems like the best solutions to
// this are way beyond the JS tools I have. I'm not gonna pursue this.
// Way too much repetition...

function convertToRom (num) {

var rom_array = [];
4
var first  =  (num % 10);
var second =  ( num - first ) % 100 / 10;
var third  =  ( num - first - second ) % 1000 / 100;
var fourth =  ( num - first - second - third ) % 10000 / 1000;

if (first === 0) {rom1 = ""}
if (first === 1) {rom1 = "I"}
if (first === 2) {rom1 = "II"}
if (first === 3) {rom1 = "III"}
if (first === 4) {rom1 = "IV"}
if (first === 5) {rom1 = "V"}
if (first === 6) {rom1 = "VI"}
if (first === 7) {rom1 = "VII"}
if (first === 8) {rom1 = "VIII"}
if (first === 9) {rom1 = "IX"}

if ( second === 0) {rom2 = ""}
if ( second === 1 ) {rom2 = "X"}
if ( second === 2 ) {rom2 = "XX"}
if ( second === 3 ) {rom2 = "XXX"}
if ( second === 4 ) {rom2 = "XXX"}
if ( second === 5 ) {rom2 = "L"}
if ( second === 6 ) {rom2 = "LX"}
if ( second === 7 ) {rom2 = "LXX"}
if ( second === 8 ) {rom2 = "LXXX"}
if ( second === 9 ) {rom2 = "CM"}

if ( third === 1 ) {rom3 = "C"}

rom_array.push(rom3);
rom_array.push(rom2);
rom_array.push(rom1);
console.log(rom_array[0],rom_array[1],rom_array[2]);
}

convertToRom(100);
