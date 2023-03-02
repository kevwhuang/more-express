export default function handleError(key, value, res) {
    const errors = {
        _id: `<${key}: ${value}> not found.`,
        avatar: `<${key}> must be a string.`,
        body: `<${key}> must be a string.`,
        category: `<${key}> must be a string.`,
        city: `<${key}> must be a string.`,
        description: `<${key}> must be a string.`,
        fuel: `<${key}> must be a string.`,
        imgUrl: `<${key}> must be a string.`,
        isNew: `<${key}> must be a boolean.`,
        km: `<${key}> must be a number.`,
        make: `<${key}> must be a string.`,
        miles: `<${key}> must be a number.`,
        model: `<${key}> must be a string.`,
        name: `<${key}> must be a string.`,
        occupation: `<${key}> must be a string.`,
        price: `<${key}> must be a string.`,
        rating: `<${key}> must be a number.`,
        year: `<${key}> must be a number.`,
    };

    return res.status(400).json({ error: errors[key] });
}
