const isValidWalk = walk => 
    walk.length == 10 && !walk.reduce((prev,curr) => 
        prev + {'n':1,'e':2,'s':-1,'w':-2}[curr],0)

        console.log(isValidWalk((['n','s','n','s','n','s','n','s','n','s']), 'should return true'))