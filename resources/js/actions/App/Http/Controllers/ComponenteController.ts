import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes'
 */
const index1f3c38fe60f8225f2f1bc05cf3c69caa = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1f3c38fe60f8225f2f1bc05cf3c69caa.url(options),
    method: 'get',
})

index1f3c38fe60f8225f2f1bc05cf3c69caa.definition = {
    methods: ["get","head"],
    url: '/componentes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes'
 */
index1f3c38fe60f8225f2f1bc05cf3c69caa.url = (options?: RouteQueryOptions) => {
    return index1f3c38fe60f8225f2f1bc05cf3c69caa.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes'
 */
index1f3c38fe60f8225f2f1bc05cf3c69caa.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1f3c38fe60f8225f2f1bc05cf3c69caa.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes'
 */
index1f3c38fe60f8225f2f1bc05cf3c69caa.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index1f3c38fe60f8225f2f1bc05cf3c69caa.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes'
 */
    const index1f3c38fe60f8225f2f1bc05cf3c69caaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index1f3c38fe60f8225f2f1bc05cf3c69caa.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes'
 */
        index1f3c38fe60f8225f2f1bc05cf3c69caaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index1f3c38fe60f8225f2f1bc05cf3c69caa.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes'
 */
        index1f3c38fe60f8225f2f1bc05cf3c69caaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index1f3c38fe60f8225f2f1bc05cf3c69caa.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index1f3c38fe60f8225f2f1bc05cf3c69caa.form = index1f3c38fe60f8225f2f1bc05cf3c69caaForm
    /**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes/{componente}'
 */
const index9a62c087dce18aeb86ad12b2aed197ac = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9a62c087dce18aeb86ad12b2aed197ac.url(args, options),
    method: 'get',
})

index9a62c087dce18aeb86ad12b2aed197ac.definition = {
    methods: ["get","head"],
    url: '/componentes/{componente}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes/{componente}'
 */
index9a62c087dce18aeb86ad12b2aed197ac.url = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { componente: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    componente: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        componente: args.componente,
                }

    return index9a62c087dce18aeb86ad12b2aed197ac.definition.url
            .replace('{componente}', parsedArgs.componente.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes/{componente}'
 */
index9a62c087dce18aeb86ad12b2aed197ac.get = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9a62c087dce18aeb86ad12b2aed197ac.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes/{componente}'
 */
index9a62c087dce18aeb86ad12b2aed197ac.head = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index9a62c087dce18aeb86ad12b2aed197ac.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes/{componente}'
 */
    const index9a62c087dce18aeb86ad12b2aed197acForm = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index9a62c087dce18aeb86ad12b2aed197ac.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes/{componente}'
 */
        index9a62c087dce18aeb86ad12b2aed197acForm.get = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index9a62c087dce18aeb86ad12b2aed197ac.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComponenteController::index
 * @see app/Http/Controllers/ComponenteController.php:31
 * @route '/componentes/{componente}'
 */
        index9a62c087dce18aeb86ad12b2aed197acForm.head = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index9a62c087dce18aeb86ad12b2aed197ac.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index9a62c087dce18aeb86ad12b2aed197ac.form = index9a62c087dce18aeb86ad12b2aed197acForm

export const index = {
    '/componentes': index1f3c38fe60f8225f2f1bc05cf3c69caa,
    '/componentes/{componente}': index9a62c087dce18aeb86ad12b2aed197ac,
}

/**
* @see \App\Http\Controllers\ComponenteController::analisar
 * @see app/Http/Controllers/ComponenteController.php:68
 * @route '/componentes/{componente}/{id}'
 */
export const analisar = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analisar.url(args, options),
    method: 'get',
})

analisar.definition = {
    methods: ["get","head"],
    url: '/componentes/{componente}/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComponenteController::analisar
 * @see app/Http/Controllers/ComponenteController.php:68
 * @route '/componentes/{componente}/{id}'
 */
analisar.url = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    componente: args[0],
                    id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        componente: args.componente,
                                id: args.id,
                }

    return analisar.definition.url
            .replace('{componente}', parsedArgs.componente.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComponenteController::analisar
 * @see app/Http/Controllers/ComponenteController.php:68
 * @route '/componentes/{componente}/{id}'
 */
analisar.get = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analisar.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComponenteController::analisar
 * @see app/Http/Controllers/ComponenteController.php:68
 * @route '/componentes/{componente}/{id}'
 */
analisar.head = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: analisar.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ComponenteController::analisar
 * @see app/Http/Controllers/ComponenteController.php:68
 * @route '/componentes/{componente}/{id}'
 */
    const analisarForm = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: analisar.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ComponenteController::analisar
 * @see app/Http/Controllers/ComponenteController.php:68
 * @route '/componentes/{componente}/{id}'
 */
        analisarForm.get = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: analisar.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ComponenteController::analisar
 * @see app/Http/Controllers/ComponenteController.php:68
 * @route '/componentes/{componente}/{id}'
 */
        analisarForm.head = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ComponenteController::salvar
 * @see app/Http/Controllers/ComponenteController.php:0
 * @route '/componentes/{componente}/salvar'
 */
export const salvar = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(args, options),
    method: 'post',
})

salvar.definition = {
    methods: ["post"],
    url: '/componentes/{componente}/salvar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComponenteController::salvar
 * @see app/Http/Controllers/ComponenteController.php:0
 * @route '/componentes/{componente}/salvar'
 */
salvar.url = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { componente: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    componente: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        componente: args.componente,
                }

    return salvar.definition.url
            .replace('{componente}', parsedArgs.componente.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComponenteController::salvar
 * @see app/Http/Controllers/ComponenteController.php:0
 * @route '/componentes/{componente}/salvar'
 */
salvar.post = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ComponenteController::salvar
 * @see app/Http/Controllers/ComponenteController.php:0
 * @route '/componentes/{componente}/salvar'
 */
    const salvarForm = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: salvar.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComponenteController::salvar
 * @see app/Http/Controllers/ComponenteController.php:0
 * @route '/componentes/{componente}/salvar'
 */
        salvarForm.post = (args: { componente: string | number } | [componente: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: salvar.url(args, options),
            method: 'post',
        })
    
    salvar.form = salvarForm
/**
* @see \App\Http\Controllers\ComponenteController::editar
 * @see app/Http/Controllers/ComponenteController.php:79
 * @route '/componentes/{componente}/{id}/editar'
 */
export const editar = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editar.url(args, options),
    method: 'post',
})

editar.definition = {
    methods: ["post"],
    url: '/componentes/{componente}/{id}/editar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComponenteController::editar
 * @see app/Http/Controllers/ComponenteController.php:79
 * @route '/componentes/{componente}/{id}/editar'
 */
editar.url = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    componente: args[0],
                    id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        componente: args.componente,
                                id: args.id,
                }

    return editar.definition.url
            .replace('{componente}', parsedArgs.componente.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComponenteController::editar
 * @see app/Http/Controllers/ComponenteController.php:79
 * @route '/componentes/{componente}/{id}/editar'
 */
editar.post = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editar.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ComponenteController::editar
 * @see app/Http/Controllers/ComponenteController.php:79
 * @route '/componentes/{componente}/{id}/editar'
 */
    const editarForm = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: editar.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComponenteController::editar
 * @see app/Http/Controllers/ComponenteController.php:79
 * @route '/componentes/{componente}/{id}/editar'
 */
        editarForm.post = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: editar.url(args, options),
            method: 'post',
        })
    
    editar.form = editarForm
/**
* @see \App\Http\Controllers\ComponenteController::remover
 * @see app/Http/Controllers/ComponenteController.php:83
 * @route '/componentes/{componente}/{id}/remover'
 */
export const remover = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: remover.url(args, options),
    method: 'post',
})

remover.definition = {
    methods: ["post"],
    url: '/componentes/{componente}/{id}/remover',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComponenteController::remover
 * @see app/Http/Controllers/ComponenteController.php:83
 * @route '/componentes/{componente}/{id}/remover'
 */
remover.url = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    componente: args[0],
                    id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        componente: args.componente,
                                id: args.id,
                }

    return remover.definition.url
            .replace('{componente}', parsedArgs.componente.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComponenteController::remover
 * @see app/Http/Controllers/ComponenteController.php:83
 * @route '/componentes/{componente}/{id}/remover'
 */
remover.post = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: remover.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ComponenteController::remover
 * @see app/Http/Controllers/ComponenteController.php:83
 * @route '/componentes/{componente}/{id}/remover'
 */
    const removerForm = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: remover.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ComponenteController::remover
 * @see app/Http/Controllers/ComponenteController.php:83
 * @route '/componentes/{componente}/{id}/remover'
 */
        removerForm.post = (args: { componente: string | number, id: string | number } | [componente: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: remover.url(args, options),
            method: 'post',
        })
    
    remover.form = removerForm
const ComponenteController = { index, analisar, salvar, editar, remover }

export default ComponenteController