extends Node2D


@onready var lasers = $Lasers
@onready var player = $Player
@onready var asteroids = $Asteroids

var aestroid_scene = preload("res://scenes/asteroids.tscn")

func _ready():
	player.connect("laser_shot", on_player_laser_shot)
	for ast in asteroids.get_children():
		ast.connect("exploded", _on_asteroid_exploded)
		
	
func _physics_process(delta):
	if Input.is_action_just_pressed("end"):
		get_tree().reload_current_scene()
	
	
	
func on_player_laser_shot(laser):
	lasers.add_child(laser)

func _on_asteroid_exploded(pos, size):
	for i in range(2):
		match size:
			Astroid.sizes.LARGE:
				spawn_astroids(pos, Astroid.sizes.MEDIUM)
			Astroid.sizes.MEDIUM:
				spawn_astroids(pos, Astroid.sizes.SMALL)
			Astroid.sizes.SMALL:
				pass


func spawn_astroids(pos, size):
	var ast = aestroid_scene.instantiate()
	ast.global_position = pos
	ast.size = size
	ast.connect("exploded", _on_asteroid_exploded)
	#asteroids.add_child(ast)
	asteroids.call_deferred("add_child", ast)
	
