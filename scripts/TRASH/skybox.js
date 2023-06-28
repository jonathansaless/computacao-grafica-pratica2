function createSkybox() {
    // const skybox = new THREE.CubeTextureLoader().load(
    //     "/assets/textures/skybox.png"
    // )
    // scene.background = skybox;
    let materialArray = [];

    let texture_ft = new THREE.TextureLoader().load('/assets/skybox/Daylight_Box_Front.bmp');
    let texture_bk = new THREE.TextureLoader().load('/assets/skybox/Daylight_Box_Back.bmp');
    let texture_up = new THREE.TextureLoader().load('/assets/skybox/Daylight_Box_Top.bmp');
    let texture_dn = new THREE.TextureLoader().load('/assets/skybox/Daylight_Box_Bottom.bmp');
    let texture_rt = new THREE.TextureLoader().load('/assets/skybox/Daylight_Box_Right.bmp');
    let texture_lf = new THREE.TextureLoader().load('/assets/skybox/Daylight_Box_Left.bmp');

    materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));

    let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);
}
createSkybox();