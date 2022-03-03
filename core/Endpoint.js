function Endpoint(filter, action) {
    this.filters = filter;
    this.action = action;

    this.run = () => {
        this.action();
    }
}

Endpoint.new = (filters, action) => {
    return new Endpoint(filters, action);
}

exports.Endpoint = Endpoint;