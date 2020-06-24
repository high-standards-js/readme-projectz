const base = require('@high-standards-js/base');
const husky = require('@high-standards-js/husky');

(async() => {
    await base.checkAcceptedHighStandards();
    
    let packageJson = base.getInitiatingProjectPackageJson();
    
    packageJson = await base.addDevDependency(packageJson, 'projectz');

    packageJson = husky.addHookCommand(
        packageJson, 
        'pre-commit', 
        'projectz'
    )
    base.copyFileFromTemplate(__dirname, 'README.md');
    base.copyFileFromTemplate(__dirname, 'projectz.json');
    base.writeInitiatingProjectPackageJson(packageJson);
})()
