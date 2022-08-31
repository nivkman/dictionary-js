function Dictionary() {
    this.datastore = [];

    this.add = (key, value) => {
        if (key)
            if (value) {
                this.datastore.push({
                    key,
                    value
                })

                return { status: 200 }
            } else
                return { status: 300, err: 'value is not exist' }

        return { status: 300, err: 'key is not exist' }
    }

    this.removeAt = (key) => {
        for (let i = 0; i < this.datastore.length; i++)
            if (this.datastore[i].key === key) {
                this.datastore.splice(this.datastore[i], 1)
                return { status: 200 }
            }
        return { status: 300, err: 'key is not exist in datastore' }
    }

    this.findAt = (key) => {
        for (let i = 0; i < this.datastore.length; i++)
            if (this.datastore[i].key === key)
                return { status: 200, value: this.datastore[i].value }

        return { status: 300, err: 'key is not exist in datastore' }
    }

    this.size = () => {
        return this.datastore.length
    }

    this.show = () => {
        return this.datastore
    }
}
(async() => {

    const dictionary1 = new Dictionary()
    dictionary1.add('dog-1', 'Gufi')
    dictionary1.add('dog-2', 'Spike')
    dictionary1.add('dog-3', 'Goldi')
    
    console.log({size: dictionary1.size()},dictionary1.show())
    
    dictionary1.removeAt('dog-2')
    
    console.log({size: dictionary1.size()},dictionary1.show())
})()