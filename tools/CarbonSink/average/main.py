import base64
import json
import os

data_dir = '/Users/ken/Development/EcoDatum/EcoDatumWeb/data/CarbonSink/2019-05-30'
data_files = os.listdir(data_dir)
tree_data_map = {}
for file in data_files:
    if file.endswith('.ednb'):
        with open(data_dir + '/' + file, encoding='utf-8') as data_file:
            json_data = json.load(data_file)
            for site in json_data['sites']:
                name = site['name']
                eco_data = site['ecoData']
                eco_data_len = len(eco_data)
                if eco_data_len == 0:
                    print('No data value for tree: ' + name + ' in file: ' + file)
                elif eco_data_len == 1:
                    data_value_encoded = eco_data[0]['dataValue']
                    data_value_decoded = base64.b64decode(data_value_encoded)
                    json_data = json.loads(data_value_decoded)
                    carbon_in_kilograms = json_data['carbonInKilograms']
                    if tree_data_map.get(name):
                        tree_data_map[name].append(carbon_in_kilograms)
                    else:
                        tree_data_map[name] = [carbon_in_kilograms]
                else:
                    print('WARN: unexpected ecoData length: ' + str(eco_data_len))

for name in sorted(tree_data_map.keys()):
    data_value_list = tree_data_map[name]
    print(name + ': ' + str(data_value_list))
    accumulator = 0
    for data_value in data_value_list:
        accumulator = accumulator + data_value
    average = accumulator / len(data_value_list)
    print(name + ': ' + str(average))
