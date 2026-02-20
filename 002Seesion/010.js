function nextTrafficLight(light) {
    let trafficLight = '';
    if (light == 'red') {
        trafficLight = 'green';
    }
    if (light == 'green') {
        trafficLight = 'yellow';
    }
    if (light == 'yellow') {
        trafficLight = 'red';
    }
    return trafficLight;
}
const userLight = prompt("enter a color of traffic light(red , green , yellow) :");
const result = nextTrafficLight(userLight);
alert(result);
