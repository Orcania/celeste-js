import IActionsStrategy from './strategies/IActionsStrategy';

class ProviderContext {
    #strategy = { ...IActionsStrategy };

    setStrategy(strategy) {
        this.#strategy = strategy;
    }

    getProvider(rpc) {
        return this.#strategy.getProvider(rpc);
    }

    async requestConnection(provider) {
        await this.#strategy.requestConnection(provider);
    }

    async requestDisconnection(provider) {
        await this.#strategy.requestDisconnection(provider);
    }

    async getConnection(provider) {
        const res = await this.#strategy.getConnection(provider);
        return res;
    }
}

export default ProviderContext;
