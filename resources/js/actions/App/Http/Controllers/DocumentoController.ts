import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DocumentoController::index
 * @see app/Http/Controllers/DocumentoController.php:12
 * @route '/documentos'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/documentos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DocumentoController::index
 * @see app/Http/Controllers/DocumentoController.php:12
 * @route '/documentos'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentoController::index
 * @see app/Http/Controllers/DocumentoController.php:12
 * @route '/documentos'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DocumentoController::index
 * @see app/Http/Controllers/DocumentoController.php:12
 * @route '/documentos'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DocumentoController::index
 * @see app/Http/Controllers/DocumentoController.php:12
 * @route '/documentos'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DocumentoController::index
 * @see app/Http/Controllers/DocumentoController.php:12
 * @route '/documentos'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DocumentoController::index
 * @see app/Http/Controllers/DocumentoController.php:12
 * @route '/documentos'
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
* @see \App\Http\Controllers\DocumentoController::analisar
 * @see app/Http/Controllers/DocumentoController.php:21
 * @route '/documentos/{id}'
 */
export const analisar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analisar.url(args, options),
    method: 'get',
})

analisar.definition = {
    methods: ["get","head"],
    url: '/documentos/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DocumentoController::analisar
 * @see app/Http/Controllers/DocumentoController.php:21
 * @route '/documentos/{id}'
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
* @see \App\Http\Controllers\DocumentoController::analisar
 * @see app/Http/Controllers/DocumentoController.php:21
 * @route '/documentos/{id}'
 */
analisar.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analisar.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DocumentoController::analisar
 * @see app/Http/Controllers/DocumentoController.php:21
 * @route '/documentos/{id}'
 */
analisar.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: analisar.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DocumentoController::analisar
 * @see app/Http/Controllers/DocumentoController.php:21
 * @route '/documentos/{id}'
 */
    const analisarForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: analisar.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DocumentoController::analisar
 * @see app/Http/Controllers/DocumentoController.php:21
 * @route '/documentos/{id}'
 */
        analisarForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: analisar.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DocumentoController::analisar
 * @see app/Http/Controllers/DocumentoController.php:21
 * @route '/documentos/{id}'
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
* @see \App\Http\Controllers\DocumentoController::salvar
 * @see app/Http/Controllers/DocumentoController.php:0
 * @route '/documentos/salvar'
 */
export const salvar = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(options),
    method: 'post',
})

salvar.definition = {
    methods: ["post"],
    url: '/documentos/salvar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DocumentoController::salvar
 * @see app/Http/Controllers/DocumentoController.php:0
 * @route '/documentos/salvar'
 */
salvar.url = (options?: RouteQueryOptions) => {
    return salvar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentoController::salvar
 * @see app/Http/Controllers/DocumentoController.php:0
 * @route '/documentos/salvar'
 */
salvar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DocumentoController::salvar
 * @see app/Http/Controllers/DocumentoController.php:0
 * @route '/documentos/salvar'
 */
    const salvarForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: salvar.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DocumentoController::salvar
 * @see app/Http/Controllers/DocumentoController.php:0
 * @route '/documentos/salvar'
 */
        salvarForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: salvar.url(options),
            method: 'post',
        })
    
    salvar.form = salvarForm
/**
* @see \App\Http\Controllers\DocumentoController::editar
 * @see app/Http/Controllers/DocumentoController.php:27
 * @route '/documentos/{id}/editar'
 */
export const editar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editar.url(args, options),
    method: 'post',
})

editar.definition = {
    methods: ["post"],
    url: '/documentos/{id}/editar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DocumentoController::editar
 * @see app/Http/Controllers/DocumentoController.php:27
 * @route '/documentos/{id}/editar'
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
* @see \App\Http\Controllers\DocumentoController::editar
 * @see app/Http/Controllers/DocumentoController.php:27
 * @route '/documentos/{id}/editar'
 */
editar.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editar.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DocumentoController::editar
 * @see app/Http/Controllers/DocumentoController.php:27
 * @route '/documentos/{id}/editar'
 */
    const editarForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: editar.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DocumentoController::editar
 * @see app/Http/Controllers/DocumentoController.php:27
 * @route '/documentos/{id}/editar'
 */
        editarForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: editar.url(args, options),
            method: 'post',
        })
    
    editar.form = editarForm
/**
* @see \App\Http\Controllers\DocumentoController::remover
 * @see app/Http/Controllers/DocumentoController.php:31
 * @route '/documentos/{id}/remover'
 */
export const remover = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: remover.url(args, options),
    method: 'post',
})

remover.definition = {
    methods: ["post"],
    url: '/documentos/{id}/remover',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DocumentoController::remover
 * @see app/Http/Controllers/DocumentoController.php:31
 * @route '/documentos/{id}/remover'
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
* @see \App\Http\Controllers\DocumentoController::remover
 * @see app/Http/Controllers/DocumentoController.php:31
 * @route '/documentos/{id}/remover'
 */
remover.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: remover.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DocumentoController::remover
 * @see app/Http/Controllers/DocumentoController.php:31
 * @route '/documentos/{id}/remover'
 */
    const removerForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: remover.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DocumentoController::remover
 * @see app/Http/Controllers/DocumentoController.php:31
 * @route '/documentos/{id}/remover'
 */
        removerForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: remover.url(args, options),
            method: 'post',
        })
    
    remover.form = removerForm
const DocumentoController = { index, analisar, salvar, editar, remover }

export default DocumentoController