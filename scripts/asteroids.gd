class_name Astroid extends Area2D

var movement := Vector2(0, -1)
var speed := 250.00

signal exploded(pos, size)

@onready var sprite_2d = $Sprite2D
@onready var collision_shape_2d = $CollisionShape2D

enum sizes{LARGE, SMALL, MEDIUM}
@export var size = sizes.LARGE
# Called when the node enters the scene tree for the first time.
func _ready():
	rotation = randf_range(0, 2*PI)
	
	match size: 
		sizes.LARGE:
			speed = randf_range(100, 200)
			sprite_2d.texture = preload("res://assets/meteorGrey_big3.png")
			var cshape = preload("res://resources/asteroids_cshape_big.tres")
			collision_shape_2d.set_deferred("shape", cshape)			
		sizes.MEDIUM:
			speed = randf_range(10, 150)
			sprite_2d.texture = preload("res://assets/meteorGrey_med1.png")
			var cshape = preload("res://resources/asteroids_cshape_med.tres")
			collision_shape_2d.set_deferred("shape", cshape)
		sizes.SMALL:
			speed = randf_range(50, 100)
			sprite_2d.texture = preload("res://assets/meteorGrey_small2.png")
			var cshape = preload("res://resources/asteroids_cshape_small.tres")
			collision_shape_2d.set_deferred("shape", cshape)			

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _physics_process(delta):
	global_position += speed * movement.rotated(rotation) * delta
	var radius = collision_shape_2d.shape.radius
	var screen_size = get_viewport_rect().size
	if global_position.y+radius < 0:
		global_position.y = screen_size.y+radius
	elif global_position.y-radius > screen_size.y:
		global_position.y = -radius
	if global_position.x+radius < 0:
		global_position.x = screen_size.x+radius
	elif global_position.x-radius > screen_size.x:
		global_position.x = -radius


func explode():
	emit_signal("exploded", global_position, size)
	queue_free()
