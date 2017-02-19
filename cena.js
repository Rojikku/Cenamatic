$(document).ready(function() {
  var Cena = "https://r2---sn-vgqskn7e.googlevideo.com/videoplayback?ctier=A&ipbits=0&expire=1487494928&ratebypass=yes&dur=11.842&itag=18&clen=1092635&pfa=5&key=cms1&gir=yes&mime=video%2Fmp4&ei=sAqpWNLeJIaFuwLYhqGoAQ&hightc=yes&source=youtube&upn=JR4CRWRV4AY&pl=21&id=o-AO8E6bJ7L3LOhRiA7axZ7FGQdHYs2oMgvQFz4jsNfor6&signature=1B47970CEE2502EE1793206D10FC64F0C18FA38A.732BB6CBA25653E20F445DD4653FF59FC6771C5E&lmt=1445022496576268&requiressl=yes&beids=%5B9452307%5D&ip=158.80.216.50&sparams=clen,ctier,dur,ei,expire,gir,hightc,id,initcwndbps,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,pfa,pl,ratebypass,requiressl,source,upn&title=AND%20HIS%20NAME%20IS%20JOHN%20CENA%20-%20FREE%20DOWNLOAD%20MP4&cpn=QEwkhklg8nCiaQ91&redirect_counter=1&cm2rm=sn-hxgpu-qufe7s&req_id=1f91ae753b02a3ee&cms_redirect=yes&mm=30&mn=sn-vgqskn7e&ms=nxu&mt=1487473232&mv=m"
  $("video>source").remove();
  $("video").html("<source type='video/mp4'>");
  $("video>source").attr('src', Cena);
  $("*").click(function() {
    $("video").load();
    $("video").get(0).play();
  });
});