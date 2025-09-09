import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProcessoController::index
 * @see app/Http/Controllers/ProcessoController.php:12
 * @route '/processos'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/processos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProcessoController::index
 * @see app/Http/Controllers/ProcessoController.php:12
 * @route '/processos'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProcessoController::index
 * @see app/Http/Controllers/ProcessoController.php:12
 * @route '/processos'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProcessoController::index
 * @see app/Http/Controllers/ProcessoController.php:12
 * @route '/processos'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProcessoController::index
 * @see app/Http/Controllers/ProcessoController.php:12
 * @route '/processos'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProcessoController::index
 * @see app/Http/Controllers/ProcessoController.php:12
 * @route '/processos'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProcessoController::index
 * @see app/Http/Controllers/ProcessoController.php:12
 * @route '/processos'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\ProcessoController::analisar
 * @see app/Http/Controllers/ProcessoController.php:22
 * @route '/processos/{id}'
 */
export const analisar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analisar.url(args, options),
    method: 'get',
})

analisar.definition = {
    methods: ["get","head"],
    url: '/processos/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProcessoController::analisar
 * @see app/Http/Controllers/ProcessoController.php:22
 * @route '/processos/{id}'
 */
analisar.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return analisar.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProcessoController::analisar
 * @see app/Http/Controllers/ProcessoController.php:22
 * @route '/processos/{id}'
 */
analisar.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analisar.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProcessoController::analisar
 * @see app/Http/Controllers/ProcessoController.php:22
 * @route '/processos/{id}'
 */
analisar.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: analisar.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProcessoController::analisar
 * @see app/Http/Controllers/ProcessoController.php:22
 * @route '/processos/{id}'
 */
    const analisarForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: analisar.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProcessoController::analisar
 * @see app/Http/Controllers/ProcessoController.php:22
 * @route '/processos/{id}'
 */
        analisarForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: analisar.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProcessoController::analisar
 * @see app/Http/Controllers/ProcessoController.php:22
 * @route '/processos/{id}'
 */
        analisarForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: analisar.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    analisar.form = analisarForm
/**
* @see \App\Http\Controllers\ProcessoController::salvar
 * @see app/Http/Controllers/ProcessoController.php:32
 * @route '/processos/salvar'
 */
export const salvar = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(options),
    method: 'post',
})

salvar.definition = {
    methods: ["post"],
    url: '/processos/salvar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProcessoController::salvar
 * @see app/Http/Controllers/ProcessoController.php:32
 * @route '/processos/salvar'
 */
salvar.url = (options?: RouteQueryOptions) => {
    return salvar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProcessoController::salvar
 * @see app/Http/Controllers/ProcessoController.php:32
 * @route '/processos/salvar'
 */
salvar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProcessoController::salvar
 * @see app/Http/Controllers/ProcessoController.php:32
 * @route '/processos/salvar'
 */
    const salvarForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: salvar.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProcessoController::salvar
 * @see app/Http/Controllers/ProcessoController.php:32
 * @route '/processos/salvar'
 */
        salvarForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: salvar.url(options),
            method: 'post',
        })
    
    salvar.form = salvarForm
/**
* @see \App\Http\Controllers\ProcessoController::editar
 * @see app/Http/Controllers/ProcessoController.php:36
 * @route '/processos/{id}/editar'
 */
export const editar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editar.url(args, options),
    method: 'post',
})

editar.definition = {
    methods: ["post"],
    url: '/processos/{id}/editar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProcessoController::editar
 * @see app/Http/Controllers/ProcessoController.php:36
 * @route '/processos/{id}/editar'
 */
editar.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return editar.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProcessoController::editar
 * @see app/Http/Controllers/ProcessoController.php:36
 * @route '/processos/{id}/editar'
 */
editar.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editar.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProcessoController::editar
 * @see app/Http/Controllers/ProcessoController.php:36
 * @route '/processos/{id}/editar'
 */
    const editarForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: editar.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProcessoController::editar
 * @see app/Http/Controllers/ProcessoController.php:36
 * @route '/processos/{id}/editar'
 */
        editarForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: editar.url(args, options),
            method: 'post',
        })
    
    editar.form = editarForm
/**
* @see \App\Http\Controllers\ProcessoController::remover
 * @see app/Http/Controllers/ProcessoController.php:41
 * @route '/processos/{id}/remover'
 */
export const remover = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: remover.url(args, options),
    method: 'post',
})

remover.definition = {
    methods: ["post"],
    url: '/processos/{id}/remover',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProcessoController::remover
 * @see app/Http/Controllers/ProcessoController.php:41
 * @route '/processos/{id}/remover'
 */
remover.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return remover.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProcessoController::remover
 * @see app/Http/Controllers/ProcessoController.php:41
 * @route '/processos/{id}/remover'
 */
remover.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: remover.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProcessoController::remover
 * @see app/Http/Controllers/ProcessoController.php:41
 * @route '/processos/{id}/remover'
 */
    const removerForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: remover.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProcessoController::remover
 * @see app/Http/Controllers/ProcessoController.php:41
 * @route '/processos/{id}/remover'
 */
        removerForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: remover.url(args, options),
            method: 'post',
        })
    
    remover.form = removerForm
const ProcessoController = { index, analisar, salvar, editar, remover }

export default ProcessoController