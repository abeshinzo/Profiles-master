// if ($response.statusCode != 200) {
//   $done(Null);
// }

// var body = $response.body;
// var obj = JSON.parse(body);

if ($response.statusCode != 200) {
  $done(Null);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const foods = ['ðš','ðĐ','ð­','ðĶī','ðĨŪ','ð', 'ð', 'ð', 'ð', 'ð', 'ð', 'ð', 'ð', 'ð', 'ð', 'ð', 'ðĨ­', 'ð', 'ðĨ']
const emojis= ['ð','ðē','â ïļ','ð','ðĩ','ðĶ','ð','ðĨ','ðš','ð§','ðŽ','ðĶ','ð','âģïļ','ðī','ðĪ','ð―','ðĪ','ð', 'ðš', 'ð', 'ðķ', 'ðž','ð', 'ðĨ']

var body = $response.body;
var obj = JSON.parse(body);
var title = emojis[getRandomInt(emojis.length)] +obj['country']+ '-' +obj['city']+ foods[getRandomInt(foods.length)];
var subtitle ='ïĢŋ'+ obj['isp']+ '('+obj['ipType']+')';
var ip = obj['query'];
var description = obj['country'] + '-' + obj['city'] + '\n' + obj['isp'] + '\n' + obj['ipType']+ '\n' + ip;

$done({title, subtitle, ip, description});
